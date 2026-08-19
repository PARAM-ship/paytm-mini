export type ApiResult<T = Record<string, unknown>> = {
  ok: boolean;
  status: number;
  data: T;
};

export async function api<T = Record<string, unknown>>(
  path: string,
  body?: unknown,
): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`/api${path}`, {
      method: body === undefined ? 'GET' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    const data = (await res.json().catch(() => ({}))) as T;
    return { ok: res.ok, status: res.status, data };
  } catch {
    return {
      ok: false,
      status: 0,
      data: { message: 'Cannot reach the server. Is the gateway running on :3000?' } as T,
    };
  }
}

export function messageOf(data: Record<string, unknown>, fallback = 'Something went wrong.'): string {
  const m = data.message;
  return typeof m === 'string' && m.length > 0 ? m : fallback;
}
