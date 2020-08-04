import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo(){
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({titulo})=> titulo);
  const { handleChange, values } = useForm({
      titulo: 'titulo padrão',
      url: 'https://www.youtube.com/watch?v=rrwjymZMLdM',
      categoria: 'front end',
  });

  useEffect(() => {
      categoriasRepository
      .getAll()
      .then((categoriasFromServer)=>{
        setCategorias(categoriasFromServer);
      });
  }, []);

    return (
      <PageDefault>
        <h1>cadastro video</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          //alert('Video Cadastrado com sucesso');

          const categoriaEscolhida = categorias.find((categoria)=>{
            return categoria.titulo === values.categoria;
          });
          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })

          .then(() => {
            history.push('/');
          });

        }}>
          <FormField
              label="Título do Vídeo"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />

            <FormField
              label="URL"
              name="url"
              value={values.url}
              onChange={handleChange}
            />

          <FormField
              label="Categoria"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}
            />

        <Button type="submit">
          Cadastrar
        </Button>
        </form>
        
        <Link to="/cadastro/categoria">
          cadastar categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;