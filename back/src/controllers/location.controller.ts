import { Request, Response } from "express";
import locationService from "../services/location.service";

export async function createLocation(req: Request, res: Response) {
  return locationService.createLocation(req, res);
}

export async function getLocations(req: Request, res: Response) {
  return locationService.getLocations(req, res);
}

export async function getLocationById(req: Request, res: Response) {
  return locationService.getLocationById(req, res);
}

export async function updateLocationById(req: Request, res: Response) {
  return locationService.updateLocationById(req, res);
}

export async function deleteLocationById(req: Request, res: Response) {
  return locationService.deleteLocationById(req, res);
}