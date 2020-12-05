import UpgradImg from "@components/image/imageUpgrad";
import CywareImg from "@components/image/imageCyware";
import RedImg from "@components/image/imageRed";
import SgImg from "@components/image/imageSg";

const ImageMap: Record<string, React.FunctionComponent> = {
	upgrad: UpgradImg,
	cyware: CywareImg,
	red: RedImg,
	sg: SgImg,
};

export default ImageMap;
