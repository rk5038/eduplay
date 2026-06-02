// server.js - Backend for EduPlay
const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Razorpay Instance
const razorpay = new Razorpay({
    key_id: 'rzp_live_XXXXXXXXXX',      // Your Key ID
    key_secret: 'XXXXXXXXXXXXXXXXXX'     // Your Key Secret
});

// ==========================================
// CREATE ORDER (called before payment)
// ==========================================
app.post('/api/create-order', async (req, res) => {
    try {
        const { amount, plan, userId } = req.body;

        const order = await razorpay.orders.create({
            amount: amount * 100,  // Convert to paise
            currency: 'INR',
            receipt: `receipt_${userId}_${Date.now()}`,
            notes: {
                plan: plan,
                userId: userId
            }
        });

        res.json({
            success: true,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency
        });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// ==========================================
// VERIFY PAYMENT (called after payment)
// ==========================================
app.post('/api/verify-payment', (req, res) => {
    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        userId,
        plan
    } = req.body;

    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac('sha256', 'YOUR_KEY_SECRET')
        .update(body)
        .digest('hex');

    if (expectedSignature === razorpay_signature) {
        // ✅ PAYMENT IS GENUINE
        console.log('✅ Payment verified for user:', userId);

        // TODO: Save to your database
        // updateUserSubscription(userId, plan);
        // sendEmailReceipt(userId, razorpay_payment_id);

        res.json({
            success: true,
            message: 'Payment verified',
            paymentId: razorpay_payment_id
        });
    } else {
        // ❌ PAYMENT IS FAKE
        res.status(400).json({
            success: false,
            message: 'Payment verification failed'
        });
    }
});

// ==========================================
// GET PAYMENT DETAILS
// ==========================================
app.get('/api/payment/:paymentId', async (req, res) => {
    try {
        const payment = await razorpay.payments.fetch(req.params.paymentId);
        res.json({ success: true, payment });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(3000, () => {
    console.log('🚀 EduPlay server running on port 3000');
});