<?php
namespace Drupal\custom\reserve_movies\src\Controller;

use Drupal\Core\Controller\ControllerBase;

class MovieReservationController {
    public function testPage () {
        $items = array(
            array('title' => 'sample movie 1'),
            array('title' => 'sample movie 2'),
            array('title' => 'sample movie 3'),
            array('title' => 'sample movie 4'),
            array('title' => 'sample movie 5'),
            array('title' => 'sample movie 6'),
            array('title' => 'sample movie 7'),
        );
        return array(
            '#theme' => 'movie_list',
            '#items' => $items,
            '#title' => 'List of movies'
        );

    }
}
