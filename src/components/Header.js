import './Header.css';

const Header = () => {
    return (
        <header>
            <div class='title'>
                <h1>My Finance</h1>
            </div>
            <div class='navigation'>
                <h2><a href="/">Home</a></h2>
                <h2><a href="/transacoes">Transações</a></h2>
            </div>
        </header>
    );
};

export default Header;