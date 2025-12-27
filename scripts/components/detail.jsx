import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
const { width, height } = Dimensions.get("window");
export default class Detail extends React.Component {
  state = {
    info: {},
  };
  componentDidMount() {
    // const { params } = this.props.route;
    // this.setState({ info: params });
    // console.log(params);
    const info = this.props.route.params;
    this.setState({ info });
  }

  render() {
    const { info } = this.state;
    if (!info) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Yükleniyor...</Text>
        </View>
      );
    }
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 35,
            }}
          >
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>Haberler</Text>
          </View>
          <Image
            style={{ width: width, height: width * 0.75, marginTop: 10 }}
            source={{ uri: info.photo }}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "red",
              marginTop: 5,
            }}
          >
            {info.name}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            pariatur doloribus corporis at in aliquid nobis voluptatum illo
            sapiente? Quos officia aut nostrum quis debitis reprehenderit animi
            culpa fugiat doloribus! Dolor eius, odit nemo ex doloribus quas,
            reprehenderit delectus libero ipsam similique ea, cumque ratione?
            Dolor eaque magnam aspernatur nam minus voluptatum dignissimos ad
            exercitationem provident, natus odit. Nihil, optio? Repellat
            ducimus, eos sapiente, in illum suscipit sit ea, dolores natus dicta
            unde assumenda modi obcaecati eligendi! Ut sapiente cum doloribus
            perferendis magni fuga quidem suscipit ea, dicta asperiores
            consequuntur? Sint, at id animi enim quo voluptatum commodi
            praesentium voluptatibus inventore maxime placeat neque voluptates
            delectus veniam cum ducimus aliquid esse dicta adipisci quaerat
            repellat! Minima pariatur delectus accusamus exercitationem? Velit,
            quas id dignissimos odit iure labore fuga nesciunt doloribus a
            deleniti praesentium minima, similique maxime voluptas iusto
            voluptatem. Nesciunt nostrum explicabo libero placeat suscipit nemo
            quis corporis excepturi deleniti! Eius ipsum, quis maiores excepturi
            delectus non exercitationem, alias quos suscipit omnis quod, harum
            placeat aliquam! Rem, ipsum nemo? Amet expedita dolorum temporibus
            minima velit repellendus, ab a voluptate eos. Sint nobis adipisci
            incidunt ducimus mollitia id, ipsum consequatur obcaecati
            temporibus! Modi quo ex nobis natus rerum veritatis sapiente
            molestias nemo rem iure animi excepturi, aliquid corporis, saepe,
            aspernatur dolore. Illum alias enim voluptate quo ducimus veritatis
            repudiandae distinctio aliquid. Architecto repudiandae nemo
            corrupti, ea commodi ratione sint dicta minus, culpa optio,
            voluptates distinctio ut itaque? Debitis est unde eos. Minus ullam
            accusamus animi aliquid atque voluptatum repudiandae voluptas
            dolorum? Veniam odio quae obcaecati? Adipisci rerum magnam
            aspernatur, consequuntur deserunt ut. Reprehenderit, aliquid
            reiciendis sint facilis corrupti amet quidem sapiente! Unde, alias
            impedit, quam harum neque sit et amet culpa nemo nulla a tempora
            quos iste aliquam sequi voluptates saepe in nisi dignissimos ut sunt
            magnam. Dolore, quam dolores. Officia. Mollitia quisquam optio a
            pariatur alias, eligendi praesentium. Nihil natus sit alias,
            similique ipsam distinctio eaque odit molestiae blanditiis iste,
            inventore optio atque. Ea ipsa in incidunt impedit magnam ad.
            Ratione possimus voluptates vel assumenda totam repellendus!
            Expedita ipsum ab perspiciatis? Nesciunt cum obcaecati cumque alias,
            quas expedita. Voluptatem assumenda omnis fugiat quasi labore
            placeat explicabo ut sunt nesciunt atque. Beatae ex recusandae
            tempora iusto! Ducimus aliquid maxime suscipit illo porro sint odit
            debitis! Optio, eligendi qui quo, iusto necessitatibus quos, ad
            sapiente molestiae odit ipsa provident expedita corrupti laudantium!
            Magni, voluptatum iusto tempore dolores minima, culpa possimus
            delectus inventore, quibusdam consequatur omnis voluptatem harum.
            Ipsa nemo accusamus ullam asperiores ipsam illum, commodi similique
            quia vero illo, sapiente animi eius. Numquam doloribus quidem
            tempore. Distinctio nisi velit modi ullam esse assumenda magnam
            itaque soluta numquam omnis atque aspernatur, nihil nulla sit quo
            consequuntur et pariatur iusto iste. Provident, ullam dignissimos.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
