import React from "react";
import Switch from "react-switch";

class NestedList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		showContent: true,
		checked: true,
		};

		this.toogleContent = this.toogleContent.bind(this)
		this.handleChange = this.handleChange.bind(this)

	  }
	  
	toogleContent(e) {
		e.preventDefault()
		this.setState({
			showContent: !this.state.showContent
	  	})
  	}

  	handleChange (checked) {
		this.setState ({
			checked: !this.state.checked
		})
  	}

	render() {
		const list = [
			{
				id: 1,
				title:"test",
				list: [
					{
						firstname: "elisa",
						lastname: "renda"
					},
					{
						firstname: "estelle",
						lastname: "mol"
					},
					{
						firstname: "emilie",
						lastname: "bialais"
					}
				]
			},
			{
				id: 2,
				title: 'test2',
				list: [
					{
						firstname: "elisa",
						lastname: "renda"
					},
					{
						firstname: "estelle",
						lastname: "mol"
					},
					{
						firstname: "emilie",
						lastname: "bialais"
					}
				]
			},
		];
		
		const {showContent} = this.state;

		return (
			<div className="widget">
				{list.map((item, index) => {
					return (
						<div key={index}>
							<div className="title">
								<label htmlFor="normal-switch">
									<h2>Companion</h2>
									<Switch
										checked={this.state.checked}
										onChange={this.handleChange}
										onColor="#86d3ff"
										onHandleColor="#2693e6"
										handleDiameter={30}
										uncheckedIcon={false}
										checkedIcon={false}
										boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
										activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
										height={20}
										width={48}
										className="react-switch"
									/>
								</label>
							</div>
							{this.state.checked ? 
							<div>
								<button onClick={this.toogleContent}>
										<h3 className="panel">List n° {item.id}: {item.title}</h3>
								</button>
								{item.list.map((subitem) => {
									return (
										<div>
											{showContent === true ? 
												<ul>
													<li>{subitem.firstname}</li>
													<li>{subitem.lastname}</li>
												</ul>
											: " " }
										</div>
									);
								})}
							</div>
							: ''}
						</div>
					);
				})}
			</div>
		);
  	}
}
export default NestedList;
