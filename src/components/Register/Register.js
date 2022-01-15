import React,{useState} from 'react'
import './Register.scss'
import {auth, db} from '../../config/Config'
import {Link} from 'react-router-dom'
const Register = (props) => {
    const[name, setName] = useState('');
    const[surname, setSurname] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');

    const Register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred)=> {
            db.collection('RegisterDataBase').doc(cred.user.uid).set({
                Name: name,
                Surname: surname,
                Email: email,
                Password: password
            }).then(()=>{
                setName('');
                setSurname('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError)
        console.log('form submitted');
    }
    return (
        <div className='Register-Container'>
            <br />
            <h2>Rejestracja</h2>
            <form autoComplete='off' className='register-form' onSubmit={Register}>
                <label htmlFor='Name'>Imie</label>
                <br />
                <input type="text" className='form-control' required
                       onChange={(e)=>setName(e.target.value)} value={name}/>
                <br />
                <label htmlFor='SurName'>Nazwisko</label>
                <br />
                <input type="text" className='form-control' required
                       onChange={(e)=>setSurname(e.target.value)} value={surname}/>
                <br />
                <label htmlFor='Email'>Adres Email</label>
                <br />
                <input type="email" className='form-control' required
                       onChange={(e)=>setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="Password">Hasło</label>
                <br />
                <input type="password" className='form-control' required
                       onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn' >Rejestruj</button>
                <span>Masz już konto? Zaloguj się
            <Link to="/login">Tutaj</Link>
            </span>
            </form>
        </div>
    )
}

export default Register
