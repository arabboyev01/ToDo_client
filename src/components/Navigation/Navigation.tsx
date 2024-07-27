import { Button } from 'antd'
import * as S from './nav.style'
import CustomRouter from '../../hooks/customRoute'

export default function Navigation() {
    const { navigate } = CustomRouter()
    return(
        <S.NavigationStyle>
            <S.Flex >
                <Button onClick={() => navigate('/register')}>Sign Up</Button>
                <Button type="primary" onClick={() => navigate('/login')}>Login</Button>
            </S.Flex>
        </S.NavigationStyle>
    )
}