<footer className={splashFooter}>
  <nav className={splashFooterNav}>
    <div className={footerLogoBox}>
      <Link to="/" className={footerLink}>
        {sosoflyFooterLogo} Sosofly
      </Link>
    </div>
    <div className={footerLinksBoxes}>
      <ul className={footerLinksBox}>
        <li className={boxHeader}>company</li>
        <li className={boxItem}>About</li>
        <li className={boxItem}>Jobs</li>
        <li className={boxItem}>For the Record</li>
      </ul>
      <ul className={footerLinksBox}>
        <li className={boxHeader}>communities</li>
        <li className={boxItem}>For Artists</li>
        <li className={boxItem}>Developers</li>
        <li className={boxItem}>Brands</li>
        <li className={boxItem}>Investors</li>
        <li className={boxItem}>Vendors</li>
      </ul>
      <ul className={footerLinksBox}>
        <li className={boxHeader}>useful links</li>
        <li className={boxItem}>Help</li>
        <li>
          <Link to="/webplayer" className={footerWebplayerLink}>
            Webplayer
          </Link>
        </li>
        <li className={boxItem}>Free Mobile App</li>
      </ul>
    </div>
    <div className={socialBox}>
      <ul className={socialIcons}>
        <li className={socialIcon}>
          <div className={socialIconOuterBox}>
            <div className={socialIconInnerBox}>I</div>
          </div>
        </li>
        <li className={socialIcon}>
          <div className={socialIconOuterBox}>
            <div className={socialIconInnerBox}>J</div>
          </div>
        </li>
        <li className={socialIcon}>
          <div className={socialIconOuterBox}>
            <div className={socialIconInnerBox}>O</div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</footer>;
