// PUT /api/config - 保存配置到 KV
export async function onRequestPut(context) {
  const { CONFIG } = context.env;

  // 简单密码验证
  const authHeader = context.request.headers.get("Authorization");
  const token = authHeader ? authHeader.replace("Bearer ", "") : "";
  if (token !== "xianyu") {
    return new Response(JSON.stringify({ error: "密码错误" }), {
      status: 401,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }

  try {
    const config = await context.request.json();
    await CONFIG.put("site-config", JSON.stringify(config), {
      expirationTtl: 2592000 // 30天过期，续期用
    });

    return new Response(JSON.stringify({ success: true, message: "配置已保存，前端即时生效" }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "保存失败: " + err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
}
