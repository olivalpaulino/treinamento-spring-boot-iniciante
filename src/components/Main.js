import './Main.css'
import MiniVideo from './MiniVideo'
import VideoIncorporado from './VideoIncorporado'

const Main = () => {
  return (
    <main>
        <VideoIncorporado url={"URL do Vídeo"} />
        <div>
            <MiniVideo aula={"Aula 1"} tema={"Tema 1"} />
            <MiniVideo aula={"Aula 2"} tema={"Tema 2"} />
            <MiniVideo aula={"Aula 3"} tema={"Tema 3"} />
            <MiniVideo aula={"Aula 4"} tema={"Tema 4"} />
        </div>
    </main>
  )
}

export default Main