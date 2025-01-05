import { useEffect, useState, useRef } from 'react'; // Toda vez que a pagina abrir ele servir para chamar a função getusers
import './style.css';
import Delete from '../../assets/delete.svg';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]); // Use state para armazenar os usuários
  const inpuName = useRef();
  const inpuEmail = useRef();
  const inputPass = useRef();

  async function getUsers() {
    try {
      const response = await api.get('/usuarios');
      setUsers(response.data); // Atualiza o estado com a resposta da API
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  }

  async function createUsers() {
    await api.post('/cadastro', {
      name: inpuName.current.value,
      email: inpuEmail.current.value,
      password: inputPass.current.value,
    });
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers(); // Chama a função para carregar os usuários
  }, []);

  return (
    <div className="container">
      <form>
        <h1> Cadastro de Usuários</h1>
        <input placeholder="nome" name="nome" type="text" ref={inpuName} />
        <input placeholder="email" name="e-mail" type="email" ref={inpuEmail} />
        <input
          placeholder="senha"
          name="password"
          type="password"
          ref={inputPass}
        />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome:<span>{user.name}</span>
            </p>
            <p>
              Email:<span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Delete} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
