import http from "http"
import fs from "fs/promises"
import path from "path"
/* */ 
const PORT = 3000


const server = http.createServer(async (req, res) => {
  console.log("URL:", req.url)

  
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Servidor activo")
    return
  }

  //ruta para mostrar información del servidor
  if (req.url === "/info") {
  const data = {
    mensaje: "Información del servidor",
    curso: "Sistemas Web",
    tecnologia: "Node.js"
  }

  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(JSON.stringify(data))
  return
}
 
  if (req.url === "/api/student") {
    const filePath = path.join(process.cwd(), "files", "datos.json")
    const texto = await fs.readFile(filePath, "utf-8")

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(texto)
    return
  }




  res.writeHead(404, { "Content-Type": "text/plain" })
  res.end(`Ruta no encontrada: ${req.url}`)
})

server.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3000")
})
