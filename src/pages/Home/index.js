import React, {useEffect, useState} from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

    useEffect(() => {
      categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos)=>{
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err)=>{

      })
    },[]);
  return (
    <PageDefault paddingAll={0}> 
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice)=>{
        if(indice === 0){
          return (
            <div key={categoria.id}>
            <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />
          </div>
      );
    }

    return (
      <Carousel
      key={categoria.id}
      category={categoria}
      />
    );
  })}

      {/*<BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}     

    </PageDefault>
  );
}

export default Home;