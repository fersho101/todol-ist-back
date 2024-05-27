import express from 'express'
import { config } from 'dotenv'
import chalk from 'chalk'

config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.listen(port, () => console.log(chalk.bgCyanBright(`Server listen on port ${port}`)))
