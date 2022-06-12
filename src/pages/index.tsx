import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../../styles/index.module.css'

const Home: NextPage = () => {

  const { locale } = useRouter()

  const textData = {
    about: '',
    projects: ''
  }

  if(locale == 'pt-BR'){
    textData.about = 'Gabriel Franco, desenvolvedor full-stack javascript e typescript. Moro no brasil desde que nasci e me interesso por programação desde os 10 anos. Antes que pergunte o porquê de meu logo ser uma batata frita, já respondo que nem eu sei'
  }
  if(locale == 'en-US'){
    textData.about = 'Gabriel Franco, full-stack javascript and typescript developer. I have been living in Brazil since I was born and started programming when I was 10.\nBefore you ask me why I use french fries as my logo, I don\'t know either'
  }


  return (
    <div className="flex flex-col items-center text-xl">
      <img src='/logo.png' width="350px" alt="logo" className={styles.image_rotation_anim}/>
      <p className="w-1/2 sm:w-2/3">{textData.about}</p>
    </div>
  )
}

export default Home
