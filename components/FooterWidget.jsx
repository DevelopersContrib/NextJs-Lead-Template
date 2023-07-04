"use client";
import { useEffect } from "react";

const FooterWidget = ({ footerHtml }) => {
  const beforeYouGoTemplate = `<div id="beforeyougo" style="display:none;" className="glue_popup glue_container">
                            <div className="glue_close" onclick="$.glue_close()">X</div>
                            <div className="glue_content">
                              <div className="wrap-exit-content text-center">
                                <img className="logo-exit-ctb" src="https://s3.amazonaws.com/assets.zipsite.net/images/jayson/icons/currency-ctb-4.png" alt="">
                                <h1 className="bg-ttle-exit"> Hello!</h1>
                                <p> We invite you to our First Movers Opportunity with our <br>CTB crypto token sale starting <b className="text-danger">October 12, 2017</b>. <br>Amazing Opportunities with world leading digital assets like Streaming.com, Applications.com and others. Learn more and get updates. <br>
                                </p>
                                <p>
                                  <a href="https://goo.gl/mEv13v" className="btn btn-lg btn-warning" target="_blank">
                                    <i className="fa fa-check"></i> Get Started </a>
                                </p>
                                <p>
                                  <a href="javascript:;" onclick="$.glue_close()" className="help-block">
                                    <small>No, thanks I am not interested to be part owner.</small>
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>`;
  useEffect(() => {
    let link = document.createElement("link");
    let jqueryGlue = document.createElement("script");
    let glue = document.createElement("script");
    let container = document.getElementsByClassName("glue-container")[0];

    link.href = "http://tools.contrib.com/css/jquery.glue.css";
    jqueryGlue.src = "http://tools.contrib.com/js/jquery.glue.min.js";
    jqueryGlue.async = true;
    glue.src = "http://tools.contrib.com/js/glue.js";
    glue.async = true;

    document.getElementsByClassName("glue-container")[0].appendChild(link);
    document
      .getElementsByClassName("glue-container")[0]
      .appendChild(jqueryGlue);
    document.getElementsByClassName("glue-container")[0].appendChild(glue);
    document.getElementById("before-you-go-container").innerHTML =
      beforeYouGoTemplate;
  }, [footerHtml]);

  return (
    <div className="cai-container">
      <div className="row">
        <div className="col-md-12">
          <div className="glue-container"></div>
          <div id="before-you-go-container"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterWidget;
