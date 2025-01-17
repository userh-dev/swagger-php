<?php declare(strict_types=1);

/**
 * @license Apache 2.0
 */

namespace AnotherNamespace;

use OpenApi\Tests\Fixtures\ExpandClasses\Ancestor;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema
 */
class Child extends Ancestor
{
    /**
     * @var bool
     * @OA\Property
     */
    public $isBaby;
}
