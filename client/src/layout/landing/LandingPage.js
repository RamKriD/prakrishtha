import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import client from "./../../services/dataService";

function LandingPage(props) {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims,
  } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isAuthenticated) {
    console.log(user);
    client
      .post("/users/activeUser", {
        data: {
          query: `
          query PostsForAuthor {
            author(id: 1) {
              firstName
                posts {
                  title
                  votes
                }
              }
            }
          `,
        },
      })
      .then((result) => {
        console.log(result.data);
      });
    getAccessTokenSilently().then(
      function (data) {
        console.log("accessToken");
        console.log(data);
      },
      function (error) {
        console.log(error);
      }
    );
    getIdTokenClaims().then(
      function (data) {
        console.log("getIdTokenClaims");
        console.log(data);
      },
      function (error) {
        console.log(error);
      }
    );
    return <Fragment>Authenticated</Fragment>;
  }
  return (
    <Fragment>
      <h3>Prakrishth</h3>
      Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit..." "ऐसा कोई नहीं है जो खुद दर्द को
      प्यार करता हो, जो ऐसा करने के पीछे हो और चाहता हो, बस क्योकि यह दर्द होता
      है..." Lorem Ipsum क्या है? Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक
      साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक
      डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह
      न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग
      लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह 1960 के दशक में Letraset Lorem
      Ipsum अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में Aldus
      PageMaker Lorem Ipsum के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के
      साथ अधिक प्रचलित हुआ. हम इसे क्यों प्रयोग करते हैं? यह एक लंबा स्थापित
      तथ्य है कि जब एक पाठक एक पृष्ठ के खाखे को देखेगा तो पठनीय सामग्री से
      विचलित हो जाएगा. Lorem Ipsum का उपयोग करने का मुद्दा यह है कि इसमें एक और
      अधिक या कम अक्षरों का सामान्य वितरण किया गया है, 'Content here, content
      here' प्रयोग करने की जगह इसे पठनीय English के रूप में प्रयोग किया जाये. अब
      कई डेस्कटॉप प्रकाशन संकुल और वेब पेज संपादक उनके डिफ़ॉल्ट मॉडल पाठ के रूप
      में Lorem Ipsum उपयोग करते हैं, और अब "Lorem Ipsum" के लिए खोज अपने शैशव
      में कई वेब साइटों को उजागर करती है. इसके विभिन्न संस्करणों का वर्षों में
      विकास हुआ है, कभी दुर्घटना से, तो कभी प्रयोजन पर (हास्य और लगाव डालने के
      लिए). यह कहाँ से आता है? आम धारणा के विपरीत Lorem Ipsum बस यादृच्छिक
      (random) पाठ नहीं है. यह 45 ई.पू. से शास्त्रीय लैटिन साहित्य के एक टुकड़े
      से जुड़ा है, जो इसे 2000 वर्ष से अधिक प्राचीन बनाता है. Richard
      McClintock, हेम्प्डन-वर्जीनिया में सिडनी कॉलेज में एक लैटिन प्रोफेसर है,
      ने एक Lorem इप्सुम में से एक और अधिक अस्पष्ट लैटिन शब्द देखा और शास्त्रीय
      साहित्य के शहर में जाते हुए असंदेहदास्पक स्रोत की खोज की. Lorem Ipsum
      सिसरौ(Sisero) द्वारा "De Finibus Bonorum et Malorum" (अच्छाई और बुराई की
      चरम सीमा) के 1.10.32 और 1.10.33 वर्गों से आता है जो ४५ BC में लिखा गया था.
      यह पुस्तक "नैतिकता के सिद्धांत" विषय पर निबंध, जो नवजागरण के दौर का एक
      बहुत लोकप्रिय ग्रंथ है. Lorem Ipsum की पहली पंक्ति, "Lorem ipsum dolor sit
      amet..", 1.10.32 खंड में एक पंक्ति से आती है. Lorem Ipsum का मानक हिस्सा
      जिसकी प्रतिलिपि सन 1500 से प्रयोग की जाती है, रुचि रखने वालों के लिए नीचे
      उपलब्ध है. Cicero द्वारा लिखे गए "de Finibus Bonorum et Malorum" के खंड
      1.10.32 और 1.10.3 भी अपने सटीक मूल रूप में उत्पादित हैं, साथ ही H. Rackham
      द्वारा 1914 में अंग्रेजी में अनुवादित संस्करण. मुझे कुछ भाग कहा मिल सकता
      है? Lorem Ipsum के अंश कई रूप में उपलब्ध हैं, लेकिन बहुमत को किसी अन्य रूप
      में परिवर्तन का सामना करना पड़ा है, हास्य डालना या क्रमरहित शब्द , जो तनिक
      भी विश्वसनीय नहीं लग रहे हो. यदि आप Lorem Ipsum के एक अनुच्छेद का उपयोग
      करने जा रहे हैं, तो आप को यकीन दिला दें कि पाठ के मध्य में वहाँ कुछ भी
      शर्मनाक छिपा हुआ नहीं है. इंटरनेट पर सभी Lorem Ipsum जनरेटर पूर्वनिर्धारित
      मात्रा में अनुच्छेद को दोहराने कि वजह से इंटरनेट पर सबसे विश्वसनीय जनरेटर
      होने के लिए जाने जाते हैं. यह एक 200 से भी अधिक लैटिन शब्दों के शब्दकोश का
      उपयोग करता है , जो एक मुट्ठी भर मॉडल वाक्य संरचना के साथ संयुक्त होकर
      Lorem Ipsum उत्पन्न करता है जो उचित भी लगता है. इसलिए उत्पन्न Lorem Ipsum
      हमेशा पुनरावृत्ति, हास्य, या गैर विशेषता शब्दों आदि से मुक्त होता है.
    </Fragment>
  );
}

export default LandingPage;
