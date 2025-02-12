import { Button } from "@/components/ui/button";
import Footer from "@/pageSections/Footer";
import Nav from "@/pageSections/Nav";

const Layout = ({ children }) => {
  // <script type="text/javascript">
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  }
  // </script>

  // <script type="text/javascript">
  (function (w, d, v3) {
    w.chaportConfig = {
      appId: "67a478f3b566d6e8eae133f9",
    };

    if (w.chaport) return;
    v3 = w.chaport = {};
    v3._q = [];
    v3._l = {};
    v3.q = function () {
      v3._q.push(arguments);
    };
    v3.on = function (e, fn) {
      if (!v3._l[e]) v3._l[e] = [];
      v3._l[e].push(fn);
    };
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://app.chaport.com/javascripts/insert.js";
    var ss = d.getElementsByTagName("script")[0];
    ss.parentNode.insertBefore(s, ss);
  })(window, document);
  {
    /* </script> */
  }
  return (
    <div>

      <Nav />
      <h4 id="google_translate_element" className=" absolute top-0  right-[15%] md:right-[25%] text-white "></h4>
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
