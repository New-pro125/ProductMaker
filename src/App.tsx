import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { ProductList } from "./lib/fakedata";
import { txtslicer } from "./utils/functions";
import Button from "./components/UI/Button";
import Popup from "./components/UI/Popup";

function App() {
	const [showPopup, setShowPopUP] = useState<boolean>(false);
	return (
		<main className={`mx-auto container relative`}>
			{showPopup && (
				<Popup title="PoPUP" setShowPopup={setShowPopUP} >
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, fuga accusantium. Modi, pariatur, hic explicabo ea dolorum suscipit aspernatur omnis numquam repudiandae nihil architecto aut minima maxime ipsum. Amet, omnis!
					Assumenda commodi neque tempora autem ea perspiciatis eligendi. Sint neque maiores iusto alias excepturi explicabo, quos quibusdam. Quod totam aperiam maiores cum accusantium consectetur? Fugit est numquam magnam tempore ducimus.
					Obcaecati omnis impedit tempore vero nisi explicabo consectetur vel placeat aut numquam, maiores voluptatem nemo sed. Ipsum inventore deleniti non blanditiis perspiciatis nulla eius voluptatum sunt? Inventore maiores rerum incidunt.
					Quasi quod, numquam omnis quibusdam optio praesentium ducimus aliquid ad tenetur neque laboriosam, itaque suscipit magni reiciendis. Saepe quo quod, exercitationem id, optio tempore suscipit nemo, distinctio sapiente quisquam vel.
					Voluptatum quidem eos ad expedita saepe unde nam cupiditate molestiae, doloribus natus placeat doloremque, quam accusantium, corrupti corporis laboriosam deserunt illum aut? Quasi nisi aperiam id, dicta fugiat magnam nostrum!
					Nulla ducimus itaque aliquid at, odit placeat dolor explicabo similique magni. Nulla, possimus. Suscipit explicabo culpa perspiciatis libero reprehenderit repudiandae velit accusamus recusandae. Earum pariatur perspiciatis dolores, quam ut recusandae?
					Tempora totam, aut id sequi dolores nobis? Tempora accusantium nulla hic nemo ea, soluta veritatis quibusdam doloribus cumque fugiat consectetur distinctio veniam ipsam laboriosam eum neque dolor omnis! Minus, ab?
					Neque asperiores impedit, culpa minima aspernatur cupiditate itaque ipsam repellat ex in aliquam nemo alias illum quia, inventore at deleniti, doloribus dolores. Vitae sequi quo, fugiat quisquam voluptates accusantium repellat.
				</Popup>
			)}
			<div className={`${showPopup ? "blur-sm " : ""} -z-10`}>
				<div className="flex flex-col p-4 justify-center items-center space-y-7 md:flex-row md:justify-between md:space-y-0  ">
					<h3 className="text-[3rem] italic px-2 ">
						Latest<span style={{color:"#8f44f4"}}>Products</span>
					</h3>
					<Button
						className=" rounded-xl md:max-w-[150px] "
						style={{backgroundColor:"#8f44f4"}}
						onClick={() => {
							setShowPopUP(!showPopup);
						}}>
						Build Now
					</Button>
				</div>
				<div className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 my-8 mx-auto max-w-[85%] lg:max-w-[95%]">
					{ProductList.map((item) => {
						return (
							<Fragment key={item.id}>
								<ProductCard
									imageURL={item.imageURL}
									category={item.category}
									description={txtslicer(item.description)}
									price={item.price}
									title={item.title}
								/>
							</Fragment>
						);
					})}
				</div>
			</div>
		</main>
	);
}

export default App;
