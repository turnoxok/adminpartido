const fetch = require("node-fetch");

exports.handler = async (event) => {
  const urlScript = "https://script.google.com/macros/s/AKfycbyQapO7_fbyyJ6GZJPhqCfMUax9_3i-_6d_-Sy54jDuhuc8zfQoqsD2XizEhe3lcYNrLA/exec"; // reemplaza con tu Apps Script
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
