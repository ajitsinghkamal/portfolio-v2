import UpgradImg from "@components/image/upgrad.image";
import CywareImg from "@components/image/cyware.image";
import RedImg from "@components/image/red.image";
import SgImg from "@components/image/sg.image";

const ImageMap: Record<string, React.FunctionComponent> = {
	upgrad: UpgradImg,
	cyware: CywareImg,
	red: RedImg,
	sg: SgImg,
};

export default ImageMap;
