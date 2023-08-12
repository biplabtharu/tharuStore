import styled from "styled-components"

const Contact = () => {
  const Wrapper = styled.section`
    .container{
      max-width: 120rem;
      margin: auto;
      padding-top: 10rem;

      h3{
        font-size: ${({theme})=>theme.fonts.normal_heading};
        font-weight: 400;
        text-align: center;
        margin-bottom: 2rem;
      }

      .contact_map{
        margin-bottom: 5rem;
      }

      form{
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 100%;
        margin: auto;
        gap: 2rem;

        input, textarea{
          padding: 1rem;
          outline: none;
          border: 1px solid #b3b3b3;
          font-size: 1.6rem;

          ::placeholder{
              font-size: 1.5rem;
              font-weight: 500;
            }
        }

      }
    }
  `;
  return (
    <Wrapper>
      <div className="container">

          <div className="contact_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14134.065280286468!2d85.324435!3d27.670432599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1686556238290!5m2!1sen!2snp" style={{width:"100%", height:"400px", border:"none"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <h3>Feel free to contact us</h3>
          <form action="">
            <input type="text" placeholder="your name"/>
            <input type="email" placeholder="your email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="your opinion"></textarea>
          </form>
      </div>
    </Wrapper>
  )
}

export default Contact