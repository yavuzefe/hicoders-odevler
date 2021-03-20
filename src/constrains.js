/*Sayfamizin orta kismini olusturan kismi Constrains isimli fonksiyon ile tanimlayip diger 
sayfalarda da kullanilabilmesi icin export ediyoruz*/

export default function Constrains(){
    return(
        <div>
            <h3>Constrains</h3>
        <ul>
          <li>
            <b>1 ≤ <i>N</i> ≤ 10</b>
          </li>
          <li>
            Each char is an uppercase letter i.e., <b><i>char</i></b> ∈  [<b><i>'A','Z'</i></b>].
          </li>
          <li>
            Each digit lies between 0 and 9, i.e., <b><i>digit</i></b> ∈  [<b><i>0,9</i></b>].
          </li>
          <li>
            The length of the PAN number is always 10 i.e., <b><i>length</i>(PAN) = 10</b>
          </li>
          <li>
            Every character in PAN is either char or digital satisfying the abover constraints.
          </li>
        </ul>
        </div>
    )
}