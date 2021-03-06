<?php

/*
 * This file is part of Sulu.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Sulu\Bundle\AudienceTargetingBundle\Entity;

use Sulu\Component\Persistence\Repository\RepositoryInterface;

/**
 * Interface for target group rule repository.
 */
interface TargetGroupRuleRepositoryInterface extends RepositoryInterface
{
    /**
     * Saves the rule of the target group to the database.
     *
     * @param TargetGroupRuleInterface $targetGroupRule
     *
     * @return TargetGroupRuleInterface
     */
    public function save(TargetGroupRuleInterface $targetGroupRule);
}
