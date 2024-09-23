/** @format */

import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./Styles";
const products = [
	{
		id: 1,
		name: "Shoes",
		description: "Running Shoes.",
		price: "$5",
		image:
			"https://www.bing.com/images/search?view=detailV2&ccid=iesP9V0P&id=0B289966C18DD510729A80C7A675EC8BB1059F9C&thid=OIP.iesP9V0PgiMHP0tElHTSSgAAAA&mediaurl=https%3a%2f%2fimg.kwcdn.com%2fproduct%2f1d6586d2a8%2f3907e380-eeba-4cb0-ad34-a544203fe797_1340x1340.jpeg.a.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.89eb0ff55d0f8223073f4b449474d24a%3frik%3dnJ8FsYvsdabHgA%26pid%3dImgRaw%26r%3d0&exph=474&expw=474&q=shoes&simid=608050817470177742&FORM=IRPRST&ck=F0AF4BFAF1C6B0F3DE0257B7179A1427&selectedIndex=2&itb=0",
	},
	{
		id: 2,
		name: "Macbook",
		description: "Apple macbook.",
		price: "$10",
		image:
			"https://www.bing.com/images/search?view=detailV2&ccid=oWFlLTvR&id=2D1BBB4FB11932AA31CAA36D77B50C64B87F3890&thid=OIP.oWFlLTvRi8SFTUZT62BxAwHaGR&mediaurl=https%3a%2f%2flaptopmedia.com%2fwp-content%2fuploads%2f2017%2f06%2fmacbook_pro_13_a_1143_0_0.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a161652d3bd18bc4854d4653eb607103%3frik%3dkDh%252fuGQMtXdtow%26pid%3dImgRaw%26r%3d0&exph=1727&expw=2040&q=mac+book&simid=608031468621271666&FORM=IRPRST&ck=61963A0784AE0C23C974BFD8C89EFA02&selectedIndex=5&itb=0",
	},
];
export default function Products() {
	const classes = useStyles();
	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid
				justify="center"
				spacing={4}>
				{products.map((product) => (
					<Grid
						key={product.id}
						xs={12}
						sm={6}
						md={4}
						lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
}
