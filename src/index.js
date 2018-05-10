import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function MainComponent(props){
    return (<div>
                <Welcome name="xyz"/>
                <Welcome name="xyz2"/>
                <Welcome name="xyz3"/>
            </div>)
}

function Welcome(a){
    return <div>Yolo, {a.name}</div>;
}

function Division(prop){
    return  (
        <div className="{prop.user.clsName}" id="{prop.user.id}"></div>
    );
};

function DivisionWrapper(prop){
    return (
        <div>
            <Division user={prop.author}/>
            <div>{prop.author.name}</div>
        </div>
    );
}


class Welcome2Component extends React.Component{
    render(){
        return <h1>This is a class Component {this.props.name}</h1>;
    }
}


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    render(){
        return (
            <div>
                Timer is running <strong>{this.state.date.toLocaleTimeString()}
                {this.props.name}
                </strong>
                {this.props.numbers.map((num)=>{
                    return num
                })}
            </div>
        );
    }

    componentDidMount(){
        console.log('Mounting');
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
}


function App2(){
    return (
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    )
}


function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log('button was clicked');
    }

    return (
        <a href="#" onClick={handleClick}>Click</a>
    )
}


class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        
        this.handleClick = this.handleClick.bind(this);
        console.log(this);

      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    
      render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
      }
}


function UserLoggin(){
    return (
        <div>Welcome Back</div>
    )
       
    
}


function GuestLogin(){
    return (
        <div>Hi Guest User</div>
    )
}

function Greeting(props){
    var isLoggin = props.isLogin;
    if(isLoggin){
        return (
            <UserLoggin/>
        )
    }
    return (<GuestLogin/>)
}

function LoginButton(props){
    return (
        <button onClick={props.abc}>Login</button>
    )
}

function LogoutButton(props){
    return (
        <button onClick={props.abc}>Logout</button>
    )
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn : false };        
    }


    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        })
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        var button = isLoggedIn ? (<LogoutButton abc={this.handleLogoutClick}/>) : ((<LoginButton abc={this.handleLoginClick}/>));
        return (<div>
            <Greeting isLogin={isLoggedIn}/> 
            {button}
        </div>)
    }
}


const number = [1,2,3,4,5];
const items = number.map((num)=>{
    return <li>{num}</li>
});


function ListAndKeys(props){
    const number = props.number;
    
    const liItems = number.map((num)=>{
        return <li onClick={handleListClick} key={num.toString()}>{num}</li>;
    });

    function handleListClick(){
        console.log('yolo');
    }

    return (
        <ul>{liItems}</ul>
    )
}


function ListItems(props){
    const value = props.value;
    return (
        <li>{value}</li>
    )
}

function NumberList(props){
    const number = props.number;
    console.log(number)
    const listItems = number.map((num)=>{
        return <ListItems key={num.toString()}
                          value={num}/>
    });

    return (
        <ul>
            {listItems}
        </ul>
    )
}

function Blog(props){
    const sidebar = (
        <ul>
            {props.posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    )

    const content = props.posts.map((post)=>{
        return <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    });


    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    )

}

const posts = [{ id : 1, title: 'title 1', content: 'Content 1'},
               { id : 2, title: 'title 2', content: 'Content 2'}]


const numbers = [1,23,4,6];




// ReactDOM.render(<EssayForm/>, document.getElementById('root'));
registerServiceWorker();
