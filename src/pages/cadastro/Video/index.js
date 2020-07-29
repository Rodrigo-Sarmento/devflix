import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
      <PageDefault>
        <h1>cadastro video</h1>
        
        <Link to="/cadastro/categoria">
          cadastar categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;