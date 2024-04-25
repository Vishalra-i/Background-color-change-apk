import { Appbar } from "react-native-paper/src/index.ts";

const Header = () => {

  return (
    <Appbar.Header style={{marginTop:40, backgroundColor:'blue'}}>
      
      <Appbar.Content title="Home" />
      
    </Appbar.Header>
  );
};

export default Header;