let environment: string;

let { NODE_ENV = 'development' } = process.env;

environment = NODE_ENV;

// = process.env.NODE_ENV || "production"; 

// console.log(process.env.NODE_ENV)

export default environment;


// const Environment = process.env.NODE_ENV === 'production';

// export default Environment