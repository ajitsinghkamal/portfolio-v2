import UpgradImg from "@components/image/upgrad";
import CywareImg from "@components/image/cyware";
import RedImg from "@components/image/red";
import SgImg from "@components/image/sg";

const ImageMap: Record<string, React.FunctionComponent> = {
	upgrad: UpgradImg,
	cyware: CywareImg,
	red: RedImg,
	sg: SgImg,
};

export default ImageMap;
