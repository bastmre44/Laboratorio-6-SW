import http from "http"
import fs from "fs/promises"
import path from "path"

const PORT = 3000

const server = http.createServer(async (req, res) => {
  console.log("URL:", req.url)

  // Ruta raíz
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Servidor activo")
    return
  }

  // Ruta /info
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

  // Ruta /saludo
  if (req.url === "/saludo") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("¡Hola, este es el servidor!")
    return
  }

  // Ruta /api/student
  if (req.url === "/api/student") {
    const filePath = path.join(process.cwd(), "files", "datos.json")
    const texto = await fs.readFile(filePath, "utf-8")

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(texto)
    return
  }

  // Ruta /api/status
  if (req.url === "/api/status") {
    const data = {
      ok: true,
      status: "Servidor funcionando correctamente",
      puerto: PORT
    }

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(data))
    return
  }

  // 404 para rutas no encontradas
  res.writeHead(404, { "Content-Type": "text/plain" })
  res.end(`Ruta no encontrada: ${req.url}`)
})

server.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3000")
})
