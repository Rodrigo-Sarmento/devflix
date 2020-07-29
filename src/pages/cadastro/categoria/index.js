import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria(){
    return (
      <PageDefault>
        <h1>cadastro de categoria</h1>



        
        <Link to="/">
          ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;