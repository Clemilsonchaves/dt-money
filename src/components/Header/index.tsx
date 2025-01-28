import { HeaderContainer, HeaderContent, NewTransictionButton } from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
    return (
        <HeaderContainer>
           <HeaderContent>
              <img src={logoImg} alt="dt money" />
              <NewTransictionButton>Nova Transação</NewTransictionButton>
           </HeaderContent> 
        </HeaderContainer>
        
    );
}