import axios from 'axios';
import { ChangeEvent } from 'react';

type InputProp = {
	type: {
		FieldType: string;
		Name: string;
		handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	}[];
};
const handleImageUpload = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
	console.log('call api here');
	let imgResponse = await axios.post(
		'https://webwila.com/giftopedia/public/api/v1/media/upload?fileInput',
		e.target.value
	);
	console.log(imgResponse);
};
const InputFields = ({ type }: InputProp) => {
	return (
		<>
			{type.map((input, index) => (
				<div key={index}>
					{input.FieldType == 'text' ? (
						<input
							style={{ width: '100%', height: '40px' }}
							className="form-control"
							type={input.FieldType}
							name={input.Name}
							id=""
							placeholder={input.Name}
							onChange={input.handleChange}
						/>
					) : (
						<input
							style={{ width: '100%', height: '40px' }}
							className="form-control"
							type={input.FieldType}
							name={input.Name}
							id=""
							placeholder={input.Name}
							onChange={e => {
								handleImageUpload(e);
							}}
						/>
					)}
				</div>
			))}
		</>
	);
};

export default InputFields;
