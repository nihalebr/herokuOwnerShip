const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Get all subscribers
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

// Get one subscriber
router.get('/:id', getSubscriber, (req, res) => {
    res.status(200).json(res.subscriber);
})

// Create one subscriber
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Update one subscriber
router.patch('/:id', getSubscriber, (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }
    res.subscriber.save().then(result => {
        res.status(200).json({ message: result });
    }).catch(err => {
        res.status(400).json({ message: err.message });
    });

})

// Delete one subscriber
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        let resp = await res.subscriber.remove();
        res.status(200).json({ message: 'Deleted subscriber', resp: resp });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.subscriber = subscriber;
    next();
}

module.exports = router