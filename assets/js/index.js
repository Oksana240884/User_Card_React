const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<App />);

function App() {

return (

<>
<UserCardInfo />

</>

);

}

function UserCardInfo() {
const user = {
    firstName: 'Emma Watson',
    email: '@EmWatson',
    gender: 'male',
    imgSrc:  
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8zUn7PWfyqBJkREcBnGCOyzu3igNu64Oxqntqn_GAGlvrm5Vx0uoVenW8z00LQW5438&usqp=CAU'
};

const isGender = {
    color: user.gender === 'male' ? 'blue' : 'red',
backroundColor: 'yellow' 
}

return (
    <article className='userCard'>


<img src={user.imgSrc} alt={user.firstName} />
<h4>{user.gender}</h4>
<h3>{user.email}</h3>
<h2 style={isGender}>{user.firstName}</h2>
</article>
)
}

