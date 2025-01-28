import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";


export function Transactions() {
  return (
   <div>
       <Header />
       <Summary />

       <TransactionContainer>
        <TransactionTable>
            
              <tbody>
                  <tr>
                    <td width="50%"> Desenvolvimento de Site </td>
                    <td>
                     <PriceHighlight variant="income"> R$ 12.000,00 </PriceHighlight>
                    </td>
                    <td> Venda </td>
                    <td> 20/01/2024 </td>
                  </tr>

                  <tr>
                    <td width="50%"> Hamburguer </td>
                    <td>
                     <PriceHighlight variant="outcome"> - R$ 59,00 </PriceHighlight>
                    </td>   
                    <td> Alimentação </td>
                    <td> 20/01/2024 </td>
                  </tr>
              </tbody>
            
            </TransactionTable>
       </TransactionContainer>
   </div>
  )
};