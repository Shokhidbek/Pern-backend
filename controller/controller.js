const {pool} = require('../config/db')
//  get products
const getProducts = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM products")
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({ message: "error get products salom" })
    }
}
//  get product by id
const getProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const text = `SELECT * FROM products WHERE id = ${id}`;
        const response = await pool.query(text);
    
        res.status(200).json(response.rows[0]);
    } catch (error) {
        res.status(500).json({ message: "error getproductById" })
        
    }
}
//  create product
const createProduct = async (req, res) => {
    try {
        const { name, price, count, chegirma, sum } = req.body
        const text = `
             INSERT INTO products (name, price, count, chegirma, sum)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [name, price, count, chegirma, sum];

        const response = await pool.query(text, values)
        res.status(201).json(response.rows[0])
    } catch (error) {
        res.status(500).json({ message: "error create product" })
    }
}

// UPDATE product 
const putProduct = async (req, res) => {
    try {
        const {id} = req.params
        const {name , price, count, chegirma, sum} = req.body
        const text = "UPDATE products SET name = $1, price = $2, count = $3, chegirma = $4,   sum = $5 WHERE products.id = $6 RETURNING * " 
        const values = [name , price, count , chegirma , sum , id ]
        const response = await pool.query(text , values)
        res.status(201).json(response.rows[0]);
    } catch (error) {
        res.status(500).json({ message: "error update product" })
    }
}
//  deleted product
const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params
        const text = 'DELETE FROM products WHERE id = $1'
        const value = [id];
        await pool.query(text, value);
        res.status(200).json({message:"deleted product"})
    } catch (error) {
        res.status(500).json({ message: "error delete product" })
    }
}

module.exports = {
    getProducts,
    createProduct,
    putProduct,
    deleteProduct,
    getProductById
}