-- TODO: Tabla de alojamientos

create table Lodging(
    id SERIAL PRIMARY KEY,
    locality VARCHAR(50),
    date_start DATE,
    date_end DATE,
    rooms INTEGER,
    capacity INTEGER,
    state INTEGER,
    price INTEGER,
    description TEXT,
    lodging_type VARCHAR(50),
    rating INTEGER
);

-- TODO : Table the Lodging
INSERT INTO Lodging (locality, date_start, date_end, rooms, capacity, state, price, description, lodging_type, rating)
VALUES
    ('New York City', '2023-06-01', '2023-06-05', 2, 4, 1, 1150, 'A cozy apartment in the heart of Manhattan', 'Apartment', 4),
    ('Miami', '2023-07-10', '2023-07-15', 1, 2, 1, 1150, 'A charming studio with a view of the beach', 'Apartment', 5),
    ('Las Vegas', '2023-08-20', '2023-08-25', 3, 6, 1, 1350, 'A spacious suite in a luxurious hotel on the Strip', 'Hotel', 3),
    ('Los Angeles', '2023-09-01', '2023-09-10', 2, 4, 1, 1200, 'A modern apartment in Hollywood', 'Apartment', 4),
    ('San Francisco', '2023-10-15', '2023-10-20', 1, 2, 1, 1300, 'A luxurious hotel room in Union Square', 'Hotel', 5),
    ('Seattle', '2023-06-15', '2023-06-20', 1, 2, 1, 1304, 'Modern studio in the vibrant Capitol Hill neighborhood, with access to a rooftop deck', 'Apartment', 4),
    ('Chicago', '2023-07-01', '2023-07-05', 2, 4, 1, 1500, 'Spacious apartment in the historic Loop district, steps away from Millennium Park and the Art Institute of Chicago', 'Apartment', 4.6),
    ('San Diego', '2023-08-10', '2023-08-15', 1, 2, 1, 2500, 'Cozy studio in the trendy Gaslamp Quarter, with access to a rooftop pool and hot tub', 'Apartment', 5),
    ('Orlando', '2023-09-01', '2023-09-10', 2, 4, 1, 200, 'Family-friendly condo near Walt Disney World, with a fully equipped kitchen and access to a community pool', 'Apartment', 4.5),
    ('New Orleans', '2023-10-01', '2023-10-05', 1, 2, 1, 125, 'Charming studio in the French Quarter, with exposed brick walls and a private balcony', 'Apartment', 4),
    ('Denver', '2023-11-15', '2023-11-20', 1, 1, 1, 525, 'Sleek apartment in the trendy RiNo district, with access to a rooftop lounge and BBQ area', 'Apartment', 1),
    ('Portland', '2023-12-01', '2023-12-05', 1, 2, 0, 1125, 'Quirky tiny house in the Alberta Arts District, with a loft bed and a cozy outdoor seating area', 'Apartment', 2),
    ('Nashville', '2024-01-15', '2024-01-20', 2, 4, 0, 1200, 'Spacious loft in the vibrant Gulch neighborhood, with high ceilings and a fully equipped kitchen', 'Apartment', 4),
    ('Austin', '2024-02-01', '2024-02-05', 1, 2, 1, 1175, 'Eclectic studio in the heart of South Congress, with access to a communal courtyard and BBQ area', 'Apartment', 4),
    ('San Antonio', '2024-03-01', '2024-03-05', 2, 4, 1, 1225, 'Traditional casita in the historic King William district, with a private courtyard and garden', 'Apartment', 4),
    ('Boston', '2024-04-15', '2024-04-20', 1, 2, 1, 1175, 'Cozy apartment in the charming Beacon Hill neighborhood, with exposed brick walls and a fireplace', 'Apartment', 4);

INSERT INTO Lodging (locality, date_start, date_end, rooms, capacity, state, price, description, lodging_type, rating)
VALUES 
('New York City', '2023-06-01', '2023-06-10', 2, 1, 1, 1150, 'A cozy apartment in the heart of Manhattan', 'Hotel', 1),
('Chicago', '2023-06-01', '2023-06-13', 1, 1, 1, 1150, 'A cozy apartment in the heart of Manhattan', 'Hotel', 2),
('Los Angeles', '2023-06-01', '2023-06-15', 2, 1, 1, 1150, 'A cozy apartment in the heart of Manhattan', 'Hotel', 3),
('San Diego', '2023-06-01', '2023-06-30', 1, 1, 1, 1150, 'A cozy apartment in the heart of Manhattan', 'Hotel', 4),
('Orlando', '2023-06-01', '2023-06-10', 1, 2, 1, 100, 'A cozy room in a 1-star hotel near Disney World, with basic amenities', 'Hotel', 2),
('Austin', '2023-06-01', '2023-06-13', 1, 1, 1, 70, 'A simple and comfortable room in a 2-star hotel, located near downtown Austin', 'Hotel', 3),
('Phoenix', '2023-06-01', '2023-06-15', 2, 4, 1, 120, 'A spacious room with a balcony in a 3-star hotel in Phoenix, with a fitness center and pool access', 'Hotel', 4),
('New Orleans', '2023-06-01', '2023-06-30', 1, 2, 1, 90, 'A charming room in a 1-star hotel in the historic French Quarter, with a courtyard and free breakfast', 'Hotel', 3);


create table UserRol(
    id SERIAL PRIMARY KEY,
    rol VARCHAR(50)
    id_user INTEGER,
);