import './style.css';
import Delete from '../../assets/delete.svg';

function Home() {
  const users = [
    {
      id: '21221',
      name: 'Daniel',
      email: 'daniel@email.com',
    },
    {
      id: '221251',
      name: 'aline',
      email: 'aline@email.com',
    },
  ];
  return (
    <div className="container">
      <form>
        <h1> Cadastro de Usuários</h1>
        <input placeholder="nome" name="nome" type="text" />
        <input placeholder="email" name="e-mail" type="email" />
        <button type="button">Cadastrar</button>
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
          <button>
            <img src={Delete} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
