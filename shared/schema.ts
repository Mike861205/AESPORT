import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Team registration
export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  teamName: text("team_name").notNull(),
  category: text("category").notNull(),
  city: text("city").notNull(),
  teamSize: integer("team_size").notNull(),
  coachName: text("coach_name").notNull(),
  coachPhone: text("coach_phone").notNull(),
  coachEmail: text("coach_email").notNull(),
  coachPosition: text("coach_position").notNull(),
  needAccommodation: boolean("need_accommodation").default(false),
  needTransportation: boolean("need_transportation").default(false),
  comments: text("comments"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  createdAt: true,
});

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;

// Teams
export const teams = pgTable("teams", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  location: text("location").notNull(),
  logo: text("logo"),
});

export const insertTeamSchema = createInsertSchema(teams).omit({
  id: true,
});

export type InsertTeam = z.infer<typeof insertTeamSchema>;
export type Team = typeof teams.$inferSelect;

// Matches
export const matches = pgTable("matches", {
  id: serial("id").primaryKey(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  category: text("category").notNull(),
  teamA: text("team_a").notNull(),
  teamB: text("team_b").notNull(),
  venue: text("venue").notNull(),
  status: text("status").notNull().default("scheduled"),
  scoreA: integer("score_a"),
  scoreB: integer("score_b"),
});

export const insertMatchSchema = createInsertSchema(matches).omit({
  id: true,
  scoreA: true,
  scoreB: true,
});

export type InsertMatch = z.infer<typeof insertMatchSchema>;
export type Match = typeof matches.$inferSelect;

// Standings
export const standings = pgTable("standings", {
  id: serial("id").primaryKey(),
  position: integer("position").notNull(),
  team: text("team").notNull(),
  played: integer("played").notNull().default(0),
  won: integer("won").notNull().default(0),
  drawn: integer("drawn").notNull().default(0),
  lost: integer("lost").notNull().default(0),
  goalsFor: integer("goals_for").notNull().default(0),
  goalsAgainst: integer("goals_against").notNull().default(0),
  goalDifference: integer("goal_difference").notNull().default(0),
  points: integer("points").notNull().default(0),
  category: text("category").notNull(),
});

export const insertStandingSchema = createInsertSchema(standings).omit({
  id: true,
});

export type InsertStanding = z.infer<typeof insertStandingSchema>;
export type Standing = typeof standings.$inferSelect;

// Players (Scorers & Assists)
export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  team: text("team").notNull(),
  goals: integer("goals").default(0),
  assists: integer("assists").default(0),
  category: text("category").notNull(),
});

export const insertPlayerSchema = createInsertSchema(players).omit({
  id: true,
});

export type InsertPlayer = z.infer<typeof insertPlayerSchema>;
export type Player = typeof players.$inferSelect;

// Venues
export const venues = pgTable("venues", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  features: text("features").array().notNull(),
  location: text("location").notNull(),
});

export const insertVenueSchema = createInsertSchema(venues).omit({
  id: true,
});

export type InsertVenue = z.infer<typeof insertVenueSchema>;
export type Venue = typeof venues.$inferSelect;

// Packages (Accommodation & Transportation)
export const packages = pgTable("packages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  features: text("features").array().notNull(),
  price: integer("price").notNull(),
  perNight: boolean("per_night").default(false),
  perPerson: boolean("per_person").default(false),
  type: text("type").notNull(),
});

export const insertPackageSchema = createInsertSchema(packages).omit({
  id: true,
});

export type InsertPackage = z.infer<typeof insertPackageSchema>;
export type Package = typeof packages.$inferSelect;

// Gallery
export const gallery = pgTable("gallery", {
  id: serial("id").primaryKey(),
  image: text("image").notNull(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
});

export const insertGallerySchema = createInsertSchema(gallery).omit({
  id: true,
});

export type InsertGallery = z.infer<typeof insertGallerySchema>;
export type Gallery = typeof gallery.$inferSelect;
