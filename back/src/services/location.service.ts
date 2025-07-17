import { Request, Response } from "express";
import { errorMessages } from "../constants/errorMessages";
import Location from "../models/location";

async function createLocation(req: Request, res: Response) {
    try {
        const { longitude, latitude } = req.body;
        const newLocation = new Location({ longitude, latitude });
        const location = await newLocation.save();

        return res.json(location);
    } catch (err) {
        console.log(err);

        return res.status(500).send(errorMessages.serverError);
    }
}

async function getLocations(req: Request, res: Response) {
    try {
        const locations = await Location.find();

        return res.json(locations);
    } catch (err) {
        console.log(err);

        return res.status(500).send(errorMessages.serverError);
    }
}

async function getLocationById(req: Request, res: Response) {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ msg: errorMessages.notFound("Location") });
        }

        return res.json(location);
    } catch (err) {
        console.log(err);

        return res.status(500).send(errorMessages.serverError);
    }
}

async function updateLocationById(req: Request, res: Response) {
    const { longitude, latitude } = req.body;
    try {
        let location = await Location.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ msg: errorMessages.notFound("Location") });
        }
        location.longitude = longitude;
        location.latitude = latitude;
        location = await location.save();

        return res.json(location);
    } catch (err) {
        console.log(err);

        return res.status(500).send(errorMessages.serverError);
    }
}

async function deleteLocationById(req: Request, res: Response) {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ msg: errorMessages.notFound("Location") });
        }
        await location.deleteOne({ _id: location._id });

        return res.json({ msg: errorMessages.locationRemoved });
    } catch (err) {
        console.log(err);

        return res.status(500).send(errorMessages.serverError);
    }
}

export default {
    createLocation,
    getLocations,
    getLocationById,
    updateLocationById,
    deleteLocationById,
};