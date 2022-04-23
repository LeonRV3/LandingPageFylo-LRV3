/* ********FOOTER********* */

footer{
    height: 40rem;
    background-color: aquamarine;
    width: 100%;
    display: flex;
    justify-content: center;
}
.footer-card{
    height: 3rem;
    background-color: blue;
    display: grid;
    grid-template-columns: 10% 90%;
}
.container-footer{
    height: 100%;
    background-color: antiquewhite;
    width: 90%;
    display: grid;
    grid-template-columns: 40% 20% 10% 10% 20%;
    grid-template-rows: repeat(2, 1fr);
}
.logo-footer{
    grid-column: 1/6;
}