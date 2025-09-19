const fetch = require("node-fetch");

exports.handler = async (event) => {
  const urlScript = "https://script.google.com/macros/s/AKfycbyJn0CWB6xt_snEsr7PDRdlEstfF8529Nu2sxgWDU5DNw3_29f6eJYQZeywtT56I-pOvQ/exec"; // reemplaza con tu Apps Script
  let options = {};
  
  if(event.httpMethod === "GET"){
    options = { method: "GET" };
    const query = event.queryStringParameters ? "?" + new URLSearchParams(event.queryStringParameters).toString() : "";
    const res = await fetch(urlScript + query, options);
    const data = await res.text();
    return { statusCode: 200, body: data };
  }
  
  if(event.httpMethod === "POST"){
    options = { method: "POST", body: event.body };
    const res = await fetch(urlScript, options);
    const data = await res.text();
    return { statusCode: 200, body: data };
  }
  
  return { statusCode: 405, body: "Method Not Allowed" };
};
