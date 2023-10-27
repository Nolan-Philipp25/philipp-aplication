import Form from 'react-bootstrap/Form';

function Select(props: { options: string[], filterHanler: any }) {
    const { options, filterHanler } = props;
    const optionsList = options?.flat()?.map((i: string) => <option key={i} value={i}>{i}</option>);

    return (
        <Form.Select aria-label="Default select example" onChange={filterHanler}>
            <option value="" >Open this select menu</option>
            {optionsList}
        </Form.Select>
    );
}

export default Select;
