import './Footer.css'

export const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className="block-signup" id="buy">
        <div className="default">
          <h1 style={{ marginBottom: '10px' }} className="">
            Made by <a href="http://nicer.io" className="">Nicer</a>.
          </h1>
          <p style={{ fontSize: '12px', fontStyle: 'italic' }} className="">
            (A parody of the good folks at Apple.)
          </p>
          <p style={{ marginTop: '0', fontSize: '14px' }} className="">
            <i className="fa fa-twitter" aria-hidden="true"></i> <a href="https://twitter.com/nicerstudio" className="">@nicerstudio</a>
          </p>
          <p className="">
            If this made you chuckle, sign up to get an email when we make other cool stuff.
          </p>

          {/* Mailchimp sign-up form */}
          <div id="mc_embed_signup" className="">
            <form
              action="http://nicer.us14.list-manage.com/subscribe/post?u=018134740cf42b7d8889b8b3b&amp;id=fffff31933"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll" className="">
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="Email address"
                  required
                />
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true" className="">
                  <input
                    type="text"
                    name="b_018134740cf42b7d8889b8b3b_fffff31933"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <div className="clear">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

