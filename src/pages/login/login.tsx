import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loadUserAction } from '../../reducers/users/users.action.creators';
import { UserHttpStore } from '../../services/user.http.store';
import Swal from 'sweetalert2';
import styles from './login.module.css';

export function Login() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        token: '',
        user: { id: '', name: '', email: '', password: '', comics: [] },
    });
    let navigate = useNavigate();

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const response = await new UserHttpStore().loginUser(formData.user);

        if (response.token) {
            dispatch(loadUserAction(response));
            localStorage.setItem('user', JSON.stringify(response));
            navigate('/mycomix');
        } else {
            Swal.fire({
                title: 'User or password invalid',
                confirmButtonText: 'Ok',
            });
        }
    };

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({
            token: '',
            user: { ...formData.user, [element.name]: element.value },
        });
    }
    return (
        <div>
            <div className={styles.headerPosition}></div>
            <form
                onSubmit={handleSubmit}
                className={styles.form}
                autoComplete="off"
            >
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    required
                    value={formData.user.name}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    required
                    value={formData.user.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <Link to={'/register'} className={styles.register}>
                    No account yet?
                </Link>
                <button type="submit" className={styles.sendButton}>
                    Send
                </button>
            </form>
        </div>
    );
}

export default Login;
